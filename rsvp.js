document.getElementById("openInvitation").addEventListener("click", function () {
    // Hide the intro screen and show the main invitation
    document.querySelector(".intro-screen").classList.add("hidden");
    document.querySelector(".main-invitation").classList.remove("hidden");
  });
  