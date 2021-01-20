function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));

    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let result = "<tr>";

        for (const key in arr[0]) {
            result += '"<th>' + key + '</th>"';
        }

        result += "</tr>";

        return result;
    };

    function makeValueRow(obj) {
        let result = "<tr>";
        for (let i = 0; i < arr.length; i++) {
            let value = arr[i];
            for (const key in value) {
                result += '"<td>' + value[key] + '</td>"';
            }
        }

        result += "</tr>";

        return result;
    };

    function escapeHtml(value) {

    };

    console.log(outputArr.join('\n'));
}


JsonToHtmlTable('[{“Name":"Stamat", "Score":5.5}, {"Name":"Rumen","Score”:6}]');