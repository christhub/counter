describe('countTo', function(){
  it('will count up to the number', function() {
    expect(countTo(3, 9)).to.eql([3, 6, 9]);
  });
});
