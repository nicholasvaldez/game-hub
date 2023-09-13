import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "51154a56b6ad4b0f97c2bfebd8f98f75",
  },
})
