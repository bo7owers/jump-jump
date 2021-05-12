$(function () {
    let $character = $('.character');
    let $obstacle = $('.obstacle');
    let $btn = $('#btn');
    let counter = 0;

    const jump = () => {
        if($character.hasClass('animation')) {
            $character.addClass('animation');
            setTimeout(()=> {
                $character.removeClass('animation');
            }, 300);
        }
    }

    
    $btn.on('click', () => {
        setInterval(() => {
            let characterTop = parseInt(window.getComputedStyle($character).getPropertyValue('top'));
            let obstacleLeft = parseInt(window.getComputedStyle($obstacle).getPropertyValue('left'));
            if(obstacleLeft < 20 && obstacleLeft >- 20 && characterTop >= 130) {
                $obstacle.css('animation', 'none');
                alert(`Game Over. Your score is ${Math.floor(counter/100)}`);
                counter = 0;
                $obstacle.css('animation', 'block 1s infinite linear')
            } else {
                counter++;
                $('#scoreSpan').html(Math.floor(counter/100));
            }
        }, 10);
    })
});