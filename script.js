async function shortUrl() {

    const url = document.getElementById("url").value;

    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

    if (response.ok) {

        const data = await response.text();

        document.getElementById('results').innerHTML = `Shortend URL : <a href = "${data}" target = "_blank"> ${data}<a/>`;
    }

else {

    document.getElementById('results').innerHTML = "Error Shortening"

}
}