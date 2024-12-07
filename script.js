document.getElementById("rsvpForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect RSVP data
  const name = document.getElementById("name").value;
  const people = document.getElementById("people").value;

  // Display confirmation message
  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.innerHTML = `
    <p>Thank you, <strong>${name}</strong>, for your RSVP!</p>
    <p>You have confirmed ${people} attendee(s). We look forward to seeing you there!</p>
  `;
  confirmationMessage.classList.remove("hidden");
});
