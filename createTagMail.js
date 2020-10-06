document.getElementById("createTagDEMail").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        var ul = document.querySelector(".e-creative-list");
        var list = ul.getElementsByTagName("li");
        var data = [];
        var urlParams = document.URL.split("?");
        var ids = urlParams[1].split(";");
        var campaignID = ids[0];
        for (let item of list) {
            console.log(item.innerText);
            data.push(item.innerText);
        }
        var de_mail = "mailto:?subject=" + campaignID + " | Tags fuer: " + data[0].split(":")[1] + " | " + data[1].split(":")[1] + " | " + data[3].split(":")[1] + "&body=Liebes Admanagement-Team,%0D%0A%0D%0Anachstehend finden Sie einen Link, unter dem Sie fuer " + data[0].split(":")[1] + " die Flashtalking-Tags zu folgender Kampagne:%0D%0A" + data[1].split(":")[1] + " | " + data[3].split(":")[1] + " entnehmen koennen.%0D%0A%0D%0ABitte achten Sie bei Impression Redirects darauf das Third Party Macro fuer den Timestamp mit einer Zufallszahl zu ersetzen.%0D%0A%0D%0ATag-Uebersicht fuer:" + data[3].split(":")[1] + ":%0D%0A" + document.URL + "%0D%0A%0D%0ABitte pruefen Sie die Ihnen auf der Uebersichtsseite zur Verfuegung gestellten Tags vor Livestellung auf ihre Funktionalitaet.%0D%0A%0D%0ABitte bestaetigen Sie uns den Erhalt der Tags und zoegern Sie nicht, uns bei Fragen zu kontaktieren.";
        var mlink = document.createElement('a');
        mlink.setAttribute('href', de_mail);
        mlink.click();
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});

document.getElementById("createTagENMail").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        var ul = document.querySelector(".e-creative-list");
        var list = ul.getElementsByTagName("li");
        var data = [];
        var urlParams = document.URL.split("?");
        var ids = urlParams[1].split(";");
        var campaignID = ids[0];
        for (let item of list) {
            console.log(item.innerText);
            data.push(item.innerText);
        }
        var en_mail = "mailto:?subject=" + campaignID + " | Tags for " + data[0].split(":")[1] + " | " + data[1].split(":")[1] + " | " + data[3].split(":")[1] + "&body=Hi,%0D%0A%0D%0APlease find below a link to collect the " + data[0].split(":")[1] + " Flashtalking tags for %0D%0A" + data[1].split(":")[1] + " | " + data[3].split(":")[1] + ".%0D%0A%0D%0AThese tags are auto cache busting, so there is no need for you to add a random number or timestamp. If you wish to add your own click tracking please follow the instructions in the tag links.%0D%0A%0D%0ATag collection point for " + data[3].split(":")[1] + ":%0D%0A" + document.URL + "%0D%0A%0D%0APlease ensure you cap the impression volume at the booked level.%0D%0A%0D%0APlease acknowledge receipt of the tags and please don't hesitate to get in touch if you have any questions.";
        var mlink = document.createElement('a');
        mlink.setAttribute('href', en_mail);
        mlink.click();
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});

