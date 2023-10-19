function calculateBill() {
    const kWh = parseFloat(document.getElementById('kWh').value);
    const lastBiMonthlyBill = parseFloat(document.getElementById('lastBill').value || 0);
    const lastMonthlyBill = lastBiMonthlyBill / 2;
    let tierCost = 0;
    let tierText = '';

    if (kWh <= 200) {
        tierCost = kWh * 0.28;
        tierText = `Tier 1 (0.28 cents/kWh): $${tierCost.toFixed(2)}`;
    } else if (kWh <= 700) {
        tierCost = 200 * 0.28 + (kWh - 200) * 0.40;
        tierText = `Tier 1 (0.28 cents/kWh): $${(200 * 0.28).toFixed(2)}<br>
                    Tier 2 (0.40 cents/kWh): $${((kWh - 200) * 0.40).toFixed(2)}`;
    } else if (kWh <= 1400) {
        tierCost = 200 * 0.28 + 500 * 0.40 + (kWh - 700) * 0.54;
        tierText = `Tier 1 (0.28 cents/kWh): $${(200 * 0.28).toFixed(2)}<br>
                    Tier 2 (0.40 cents/kWh): $${(500 * 0.40).toFixed(2)}<br>
                    Tier 3 (0.54 cents/kWh): $${((kWh - 700) * 0.54).toFixed(2)}`;
    } else {
        tierCost = 200 * 0.28 + 500 * 0.40 + 700 * 0.54 + (kWh - 1400) * 0.68;
        tierText = `Tier 1 (0.28 cents/kWh): $${(200 * 0.28).toFixed(2)}<br>
                    Tier 2 (0.40 cents/kWh): $${(500 * 0.40).toFixed(2)}<br>
                    Tier 3 (0.54 cents/kWh): $${(700 * 0.54).toFixed(2)}<br>
                    Tier 4 (0.68 cents/kWh): $${((kWh - 1400) * 0.68).toFixed(2)}`;
    }

    const vatAmount = (tierCost + 7.50) * 0.125;
    const currentMonthlyBill = tierCost + 7.50 + vatAmount;

    const increasePercentage = ((currentMonthlyBill - lastMonthlyBill) / lastMonthlyBill) * 100;

    document.getElementById('increaseValue').innerText = `${increasePercentage.toFixed(2)}%`;
    document.getElementById('tierCharge').innerHTML = tierText;
    document.getElementById('vat').innerHTML = `VAT (12.5%): $${vatAmount.toFixed(2)}`;
    document.getElementById('total').innerHTML = `<strong>Total Bill Amount: $${currentMonthlyBill.toFixed(2)}</strong>`;
}
