import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import webpack from "webpack";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "production",
  entry: {
    index: "./src/index.ts",
    button: "./src/components/Button.tsx",
    link: "./src/components/Link.tsx",
    theme: "./src/context/theme-provider.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: ({ chunk }) =>
      chunk.name === "index" ? "[name].mjs" : "components/[name].mjs",
    library: { type: "module" },
    chunkFormat: "module",
    clean: false,
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  optimization: {
    minimize: true,
    sideEffects: false,
    usedExports: true,
  },
  devtool: "source-map",
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
    }),
  ],
};
