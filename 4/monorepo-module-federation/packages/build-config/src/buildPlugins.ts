import webpack, { Configuration } from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
// import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

import { BuildOptions } from "./types/types";

export function buildPlugins({
  paths,
  analyzer,
}: BuildOptions): Configuration["plugins"] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    analyzer && new BundleAnalyzerPlugin(),
    // new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshPlugin(),
  ].filter(Boolean);
}
