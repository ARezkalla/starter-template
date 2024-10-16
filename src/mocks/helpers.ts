export const enableMocks = async () => {
  try {
    const { worker } = await import("@/mocks/browser")
    worker.start({
      onUnhandledRequest: "warn",
    })
  } catch (err) {
    console.error(err)
  }
}
