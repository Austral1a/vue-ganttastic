import { CONFIG_KEY } from "../models/symbols"
import { inject } from "vue"

export default function useConfig() {
  const config = inject(CONFIG_KEY)
  if (!config) {
    throw Error("Failed to inject config!")
  }
  return config
}
