<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 15px;
            text-align: left;
        }

        table#t01 {
            width: 100%;
            background-color: #f1f1c1;
        }
    </style>
    <script>
        var getLocation = function (href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };


        function ParseUrl() {
            var url = document.getElementById("inputUrl").value;

            var l = getLocation(url);
            console.log("hostname " + l.hostname);
            //"example.com"
            console.log("pathname  " + l.pathname);
            // "/path"

            console.log("protocol " + l.protocol);
            //https
            console.log("port " + l.port);
            //port
            console.log("search " + l.search);
            //search

            console.log("searchparameters " + l.searchParams);

            /////////////////////////////////////////////////////////////////////////
            var table = document.getElementById("targettable");

            var row1 = table.insertRow(1);

            var tr1 = document.createElement("tr");

            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");

            var txt1 = document.createTextNode("Protocol");
            if (l.protocol == "http:") {
                var txt2 = document.createTextNode(l.protocol.slice(0, 4));
                var txt3 = document.createTextNode("HyperText Transfer Protocol");
                var txt4 = document.createTextNode("Provided");
            }
            else if (l.protocol == "https:") {
                var txt2 = document.createTextNode(l.protocol.slice(0, 5));
                var txt3 = document.createTextNode("HyperText Transfer Protocol Secure");
                var txt4 = document.createTextNode("Provided");
            }
            else {
                var txt2 = document.createTextNode("http");
                var txt3 = document.createTextNode("HyperText Transfer Protocol");
                var txt4 = document.createTextNode("Default");
            }

            td1.appendChild(txt1);
            td2.appendChild(txt2);
            td3.appendChild(txt3);
            td4.appendChild(txt4);

            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tr1.appendChild(td3);
            tr1.appendChild(td4);

            table.appendChild(tr1);

            ////////////////row 2/////////////////////////////


            var row2 = table.insertRow(2);

            var tr2 = document.createElement("tr");

            var td21 = document.createElement("td");
            var td22 = document.createElement("td");
            var td23 = document.createElement("td");
            var td24 = document.createElement("td");

            var txt21 = document.createTextNode("Port");
            if (l.port != "") {
                var txt22 = document.createTextNode(l.port);
                var txt23 = document.createTextNode("");
                var txt24 = document.createTextNode("Provided");
            }
            else {
                var txt22 = document.createTextNode("80");
                var txt23 = document.createTextNode("");
                var txt24 = document.createTextNode("Default");
            }

            td21.appendChild(txt21);
            td22.appendChild(txt22);
            td23.appendChild(txt23);
            td24.appendChild(txt24);

            tr2.appendChild(td21);
            tr2.appendChild(td22);
            tr2.appendChild(td23);
            tr2.appendChild(td24);

            table.appendChild(tr2);

        

////////////////row 3/////////////////////////////
var row3 = table.insertRow(3);

            var tr3 = document.createElement("tr");

            var td31 = document.createElement("td");
            var td32 = document.createElement("td");
            var td33 = document.createElement("td");
            var td34 = document.createElement("td");

                var txt31 = document.createTextNode("Full Address");
                var txt32 = document.createTextNode(l.hostname);
                var txt33 = document.createTextNode("");
                var txt34 = document.createTextNode("Lookup");
            

            td31.appendChild(txt31);
            td32.appendChild(txt32);
            td33.appendChild(txt33);
            td34.appendChild(txt34);

            tr3.appendChild(td31);
            tr3.appendChild(td32);
            tr3.appendChild(td33);
            tr3.appendChild(td34);

            table.appendChild(tr3);



////////////////row 4//// top level domain /////////////////////////
var row4 = table.insertRow(4);

            var tr4 = document.createElement("tr");

            var td41 = document.createElement("td");
            var td42 = document.createElement("td");
            var td43 = document.createElement("td");
            var td44 = document.createElement("td");

                var txt41 = document.createTextNode("Top-Level Domain");
                var topdomain=l.hostname.split(".");
                console.log(topdomain);
                var txt42 = document.createTextNode(topdomain[topdomain.length-1]);
                var txt43 = document.createTextNode("");
                var txt44 = document.createTextNode("provided");
            

            td41.appendChild(txt41);
            td42.appendChild(txt42);
            td43.appendChild(txt43);
            td44.appendChild(txt44);

            tr4.appendChild(td41);
            tr4.appendChild(td42);
            tr4.appendChild(td43);
            tr4.appendChild(td44);

            table.appendChild(tr4);

////////////////row 5//// Domain Name /////////////////////////
var row5 = table.insertRow(5);

            var tr5 = document.createElement("tr");

            var td51 = document.createElement("td");
            var td52 = document.createElement("td");
            var td53 = document.createElement("td");
            var td54 = document.createElement("td");

                var txt51 = document.createTextNode("Domain Name");
                var domainName=topdomain[topdomain.length-2] +"."+topdomain[topdomain.length-1];
                var txt52 = document.createTextNode(domainName);
                var txt53 = document.createTextNode("");
                var txt54 = document.createTextNode("provided");
            

            td51.appendChild(txt51);
            td52.appendChild(txt52);
            td53.appendChild(txt53);
            td54.appendChild(txt54);

            tr5.appendChild(td51);
            tr5.appendChild(td52);
            tr5.appendChild(td53);
            tr5.appendChild(td54);

            table.appendChild(tr5);




        }





    </script>

</head>

<body>


    <header>
        <h1> Welcome to my Webpage</h1>
    </header>

    <input type="text" id="inputUrl" />
    <input type="button" onclick="ParseUrl()" value="submit" />
    <br>
    <br>
    <br>
    <div id="output">
        <table id="targettable" style="width:50%">
            <tr>
                <th>Description</th>
                <th>Entry</th>
                <th>Additional Information</th>
                <th>Source</th>
            </tr>
        </table>


    </div>
</body>

</html>
