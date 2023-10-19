function calculateBill() {
    const kWh = parseFloat(document.getElementById('kWh').value);
    const lastBiMonthlyBillInput = document.getElementById('lastBill').value;
    const lastBiMonthlyBill = parseFloat(lastBiMonthlyBillInput || 0);
    const lastMonthlyBill = lastBiMonthlyBill / 2;
    let tierCost = 0;
    let tierText = '';

    if (kWh <= 200) {
        tierCost = kWh * 0.28;
        tierText = `${kWh}kWh @ $0.28/kWh: $${tierCost.toFixed(2)}`;
    } else if (kWh <= 700) {
        tierCost = 200 * 0.28 + (kWh - 200) * 0.40;
        tierText = `200kWh @ $0.28/kWh: $${(200 * 0.28).toFixed(2)}<br>
                    ${(kWh - 200)}kWh @ $0.40/kWh: $${((kWh - 200) * 0.40).toFixed(2)}`;
    } else if (kWh <= 1400) {
        tierCost = 200 * 0.28 + 500 * 0.40 + (kWh - 700) * 0.54;
        tierText = `200kWh @ $0.28/kWh: $${(200 * 0.28).toFixed(2)}<br>
                    500kWh @ $0.40/kWh: $${(500 * 0.40).toFixed(2)}<br>
                    ${(kWh - 700)}kWh @ $0.54/kWh: $${((kWh - 700) * 0.54).toFixed(2)}`;
    } else {
        tierCost = 200 * 0.28 + 500 * 0.40 + 700 * 0.54 + (kWh - 1400) * 0.68;
        tierText = `200kWh @ $0.28/kWh: $${(200 * 0.28).toFixed(2)}<br>
                    500kWh @ $0.40/kWh: $${(500 * 0.40).toFixed(2)}<br>
                    700kWh @ $0.54/kWh: $${(700 * 0.54).toFixed(2)}<br>
                    ${(kWh - 1400)}kWh @ $0.68/kWh: $${((kWh - 1400) * 0.68).toFixed(2)}`;
    }

    const vatAmount = (tierCost + 7.50) * 0.125;
    const currentMonthlyBill = tierCost + 7.50 + vatAmount;

    let increasePercentage = 0;
    if (lastBiMonthlyBillInput) {
        increasePercentage = ((currentMonthlyBill - lastMonthlyBill) / lastMonthlyBill) * 100;
    }

    document.getElementById('increaseValue').innerText = `${increasePercentage.toFixed(2)}%`;
    document.getElementById('tierCharge').innerHTML = tierText;
    document.getElementById('standardCharge').innerHTML = `Standard Charge: $7.50`;
    document.getElementById('vat').innerHTML = `VAT (12.5%): $${vatAmount.toFixed(2)}`;
    document.getElementById('total').innerHTML = `<strong>Total Bill Amount: $${currentMonthlyBill.toFixed(2)}</strong>`;
}
