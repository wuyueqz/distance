var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx*dx + dy*dy);
    //-------------------
    //---- Your Code ----
    //-------------------    
    // return 'Error: 1st function not implemented';    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    data.forEach(functon(existingPoint){
    var dx = existingPoint.x - newPoint.x;
    var dy = existingPoint.y - newPoint.y;
    existingPoint.distance = Math.sqrt(dx*dx + dy*dy);
    return data;
    //-------------------
    //---- Your Code ----
    //-------------------
    // return 'Error: 2nd function not implemented';
};

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a,b){
        return a.distance - b.distance;
    });
    return data.slice(0,k);
};
    //-------------------
    //---- Your Code ----
    //------------------- 
    return 'Error: 3rd function not implemented';    
};

module.exports = exercise;
