function dayOfWeek(day) {
    let number;
    
    switch(day) {
            case'Monday':number = 1;break;
            case'Tuesday':number = 2;break;
            case'Wednesday':number = 3;break;
            case'Thursday':number = 4;break;
            case'Friday':number = 5;break;
            case'Saturday':number = 6;break;
            case'Sunday':number = 7;break;
        default:number = 'error';
    }
    
    return number;
}