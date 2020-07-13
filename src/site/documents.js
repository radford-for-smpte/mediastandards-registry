const labelColumns = Array.from(document.querySelectorAll('tbody .label'))
const titleColumns = Array.from(document.querySelectorAll('tbody .title'))
const publisherColumns = Array.from(document.querySelectorAll('tbody .publisher'))
const rows = Array.from(document.querySelectorAll('tbody tr'))
const titles = titleColumns.map(({ textContent }) => textContent.toLowerCase())
const labels = labelColumns.map(({ textContent }) => textContent.toLowerCase())
const publishers = publisherColumns.map(({ textContent }) => textContent.toLowerCase())

function filter(value) {
  const valueLc = value.toLowerCase()
  titles.forEach((desc, i) => {
    const method = (!value || desc.includes(valueLc) || labels[i].includes(valueLc) || publishers[i].includes(valueLc)) ? "remove" : "add"
    rows[i].classList[method]('d-none');
  });
}

document.getElementById('search').addEventListener('input', ({ target: { value } }) => filter(value));

$(document).ready(function() {
    $('#docTable').DataTable( {
        columnDefs: [ {
            targets: [ 0 ],
            orderData: [ 0, 1 ]
        }, {
            targets: [ 1 ],
            orderData: [ 1, 0 ]
        }, {
            targets: [ 4 ],
            orderData: [ 4, 0 ]
        } ]
    } );
} );