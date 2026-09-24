function saveMember(member) {
    let members = JSON.parse(localStorage.getItem("gymMembers")) || [];

    members.push(member);

    localStorage.setItem("gymMembers", JSON.stringify(members));

    alert("Member saved successfully!");

    const newMember = {
    id: Date.now(),
    name: "Juan Dela Cruz",
    email: "juan@gmail.com",
    plan: "Monthly",
    status: "Active",
    nfcUID: "04A1B2C3D4E5"
};

saveMember(newMember);
// Load saved members (merge with defaults, avoid duplicates)
const savedMembers = JSON.parse(localStorage.getItem("gym_members") || "[]");
savedMembers.forEach(sm => {
  if (!members.some(m => m.cardUID === sm.cardUID)) members.push(sm);
});
localStorage.setItem("gym_members", JSON.stringify(members));
}