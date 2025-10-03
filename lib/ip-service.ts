// Service để lấy IP address của user
export class IPService {
  private static cachedIP: string | null = null

  static async getUserIP(): Promise<string> {
    // Nếu đã cache IP, return luôn
    if (this.cachedIP) {
      return this.cachedIP
    }

    try {
      // Thử các API miễn phí để lấy IP
      const apis = ["https://api.ipify.org?format=json", "https://ipapi.co/json/", "https://ip-api.com/json/"]

      for (const api of apis) {
        try {
          const response = await fetch(api, { timeout: 3000 } as any)
          const data = await response.json()

          // Xử lý response khác nhau của từng API
          const ip = data.ip || data.query || "Unknown"
          if (ip && ip !== "Unknown") {
            this.cachedIP = ip
            return ip
          }
        } catch (apiError) {
          console.warn(`Failed to get IP from ${api}:`, apiError)
          continue
        }
      }

      return "Unknown"
    } catch (error) {
      console.warn("Could not determine IP address:", error)
      return "Unknown"
    }
  }
}
