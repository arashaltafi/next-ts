self.addEventListener("install", (event) => {
    console.log("Service worker installed");
});

self.addEventListener("activate", (event) => {
    console.log("Service worker activated");
});

self.addEventListener("fetch", (event) => {
    console.log("Fetching:", event.request.url);
});

self.addEventListener("message", (event) => {
    console.log("Message:", event.data);
})

self.addEventListener("push", (event) => {
    console.log("Push:", event.data);
})