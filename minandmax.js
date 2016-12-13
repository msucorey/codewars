var min = function(list){
  if (list.length  == 1) {
    return list[0];
  }
  var min = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
}

var max = function(list){
  if (list.length  == 1) {
    return list[0];
  }
  var max = list[0];
  for (var i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}

describe("Test", function(){
  it("Examples", function(){
    Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    Test.assertEquals(max([5]), 5);
  });
});
