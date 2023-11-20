import { BuildOptions } from "../types/types";
import { removeDataTestIdPlugin } from "./removeDataTestIdPlugin";

export function BabelCinfig(options: BuildOptions) {
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
        ],
        plugins: [
            [
                removeDataTestIdPlugin,
                {
                    props: ['data-testid']
                }
            ]
        ]
      },
    },
  };
}
