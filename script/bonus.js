document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusNumber = getValueFromInput("get-number");
  const balance = getValueFromInput("balance");
  const bonus = 500;
  const newBalance = Number(balance) + bonus;
  if (bonusNumber !== "AMIRULISLAMLBD313") {
    alert("Invalid Coupon");
    return;
  } else {
    alert(`
    Congratulation you have received a bonus.
    Bonus amount: ${bonus}
    ${new Date()}
    `);
    setBalance(newBalance);
  }

  const bonusHistory = document.getElementById("history");
  const createDive = document.createElement("div");
  createDive.innerHTML = `
    <div class="transaction-card bg-base-200 p-5 mx-2 rounded">
    Congratulation you have received a bonus.
    Bonus amount: ${bonus} 
    ${new Date()}
    </div>
    `
bonusHistory.append(createDive)
});
