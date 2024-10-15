export const enableMocks = async () => {
  try {
    const { worker } = await import("@/mocks/browser")
    worker.start()
  } catch (err) {
    console.error(err)
  }
}
