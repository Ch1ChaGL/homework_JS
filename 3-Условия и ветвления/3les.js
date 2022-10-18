const calculateSubtotal  = (goods) =>{
    let amount = 0;
    for(const item of goods){
        if(item.price<0)throw 'negative price';
        else amount+=item.price;
    }
    return amount;
};


if (item.price <0) throw 'Negative price';
amount+=item.price;


if (item.price <0){
    throw 'Negative price';
}
amount+=item.price;



if (item.price > 0) return false;
return true;


if (order[groupName] && order[groupName].lenght>0){
    total+=calculateSubtotal(order[groupName]);
    count+= order[groupName].lenght;
}