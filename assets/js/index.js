

let typewriter = new Typewriter(document.querySelector('#heading header #changed-text'),{
    loop: true
})
typewriter.typeString('I AM FRED MAKARANGA')
    .pauseFor(2500)
    .deleteChars(14)
    .typeString('A DEVELOPER')
    .pauseFor(2500)
    .deleteChars(16)
    .typeString('<strong>TAKE YOUR TIME AND PREVIEW MY WORK!</strong>')
    .pauseFor(2500)
    .start();

    let jsBar = document.querySelector('.experience .progress .experience-js');
    let htmlBar = document.querySelector('.experience .progress .experience-html');
    let ad = document.querySelector('.experience .progress .experience-ad');
    let css = document.querySelector('.experience .progress .experience-css');
    let i = 0;
    let js = setInterval(jsProg,90);
    let csInt = setInterval(cssProg,90);
    let htm = setInterval(htmlProg,500);
    let aL = setInterval(alProg,300);
    function jsProg(){
        if(i >=90){
            clearInterval(js);
        }else{
            i++;
                // el.datset.value
                jsBar.style.width = i + '%';
                jsBar.innerHTML = i + '%';
        }
    }
    function htmlProg(){
        if(i >=100){
            clearInterval(htm);
        }else{
            i++;
            htmlBar.style.width = i + '%';
            htmlBar.innerHTML = i +'%';
        }
    }
    function alProg(){
        if(i >=85){
            clearInterval(aL);
        }else{
            i++;
            ad.style.width = i + '%';
            ad.innerHTML = i +'%';
        }
    }
    function cssProg(){
        if(i >=96){
            clearInterval(css);
        }else{
            i++;
            css.style.width = i + '%';
            css.innerHTML = i +'%';
        }
    }

    const d = new Date()
    document.querySelector('footer .current-year').innerHTML = d.getFullYear()