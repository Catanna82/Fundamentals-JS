function extract(params) {
    let text = params.shift();
    let workReg = / \b([a-z](?:_?[a-z0-9\-\.]+@[a-z\-?]+\.[a-z]+([\.a-z]+)?))\b/gim

    let matches = text.match(workReg);
    if (matches !== null) {
        console.log(matches.join('\n'));
    }

}

extract(['Please contact us at: support@github.com.']);

extract(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);

extract(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.']);