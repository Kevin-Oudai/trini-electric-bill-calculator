function calculateBill() {
    const kWh = parseFloat(document.getElementById('kWh').value);
    let cost = 0;

    if (kWh <= 200) {
        cost = kWh * 0.28;
    } else if (kWh <= 700) {
        cost = 200 * 0.28 + (kWh - 200) * 0.40;
    } else if (kWh <= 1400) {
        cost = 200 * 0.28 + 500 * 0.40 + (kWh - 700) * 0.54;
    } else {
        cost = 200 * 0.28 + 500 * 0.40 + 700 * 0.54 + (kWh - 1400) * 0.68;
    }

    cost += 7.50;  // Add standard charge
    cost += cost * 0.125;  // Add VAT

    document.getElementById('result').innerHTML = `Total Bill Amount: $${cost.toFixed(2)}`;
}
