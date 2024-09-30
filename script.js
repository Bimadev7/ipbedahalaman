document.getElementById('searchBtn').addEventListener('click', function() {
    const ip = document.getElementById('ipInput').value;
    const resultDiv = document.getElementById('result');
    
    if (ip === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Silakan masukkan alamat IP.</p>";
        return;
    }

    fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = `<p style='color: red;'>${data.reason}</p>`;
            } else {
                resultDiv.innerHTML = `
                    <h2>Informasi Lokasi:</h2>
                    <p>IP: ${data.ip}</p>
                    <p>Negara: ${data.country_name}</p>
                    <p>Kota: ${data.city}</p>
                    <p>Region: ${data.region}</p>
                    <p>Latitude: ${data.latitude}</p>
                    <p>Longitude: ${data.longitude}</p>
                `;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = `<p style='color: red;'>Terjadi kesalahan: ${error.message}</p>`;
        });
});
