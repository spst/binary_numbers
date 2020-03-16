document.addEventListener('DOMContentLoaded', function() {
    // add an anclick event to each image to switch its state
    document.querySelectorAll(".light").forEach(function(img) {
            img.onclick = () => {
                switch_state(img.dataset.value)
            };
        }
    );

    compute_binary();
    compute_decimal();
});

// define a function to switch the state of one bit
function switch_state(which_bit) {
    new_state = flip_bit(document.querySelector(`#bitstate_${which_bit}`).innerHTML);
    document.querySelector(`#bitstate_${which_bit}`).innerHTML = new_state;
    document.querySelector(`#bitval_${which_bit}`).innerHTML = new_state * Number(which_bit);
    if (new_state === 0)
        document.querySelector(`#light_${which_bit}`).src = "static/light_off.jpg";
    else
        document.querySelector(`#light_${which_bit}`).src = "static/light_on.jpg";
    
    compute_binary();
    compute_decimal();
};


function compute_decimal() {
    // compute the decimal value based on the bit states
    bitval = 1;
    decimalval = 0;
    do {
        decimalval += bitval * Number(document.querySelector(`#bitstate_${bitval}`).innerHTML)
        bitval *= 2;
    }
    while (document.getElementById(`bitstate_${bitval}`));
    
    document.querySelector("#decimalval").innerHTML = decimalval;
};


function compute_binary() {
    // compute the binary number based on the bit states
    bitval = 1;
    binaryval = "";
    do {
        binaryval = document.querySelector(`#bitstate_${bitval}`).innerHTML + binaryval;
        bitval *= 2;
    }
    while (document.getElementById(`bitstate_${bitval}`));
    
    document.querySelector("#binaryval").innerHTML = binaryval;
};


function flip_bit(bit) {
    if (Number(bit) === 0)
        return 1;
    else 
        return 0;
};

