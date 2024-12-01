import  React from 'react';
import $ from 'jquery';

const Gift = (data) => {
    const [giftOpen, setGiftOpen] = React.useState(false);

    const handleGiftOpen = () => {
        const $gift = $("#gift")
        
        $gift.stop(true, false)
        $gift.fadeOut(500, function(){
            setGiftOpen(true);
            $(this).fadeIn(800)
            $(this).removeClass("pulse")

            setTimeout(() => {
                data.onGiftOpen()
            }, 4000);
   
        });
    }

    return (
        <>
            <h3 id='reward' style={{ display: giftOpen ? "flex" : "none"}}>{data.reward}</h3>
            <img src={giftOpen ? "gift-open.png" : "gift.png"} id='gift' alt="Gift" className='pulse' onClick={handleGiftOpen} />
        </>
  
    )
}

export default Gift;