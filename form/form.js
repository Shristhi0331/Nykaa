function calculateTotal() {
    let price = parseFloat(document.getElementById('price').value);
    let quantity = parseInt(document.getElementById('quantity').value);
    let total = price * quantity;
    document.getElementById('total').value = "$" + total.toFixed(2);
}
