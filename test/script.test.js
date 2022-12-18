const expect = require('chai').expect;

describe('Calculs de la calculatrice', function() {
    it('devrait effectuer une addition', function(done) {
      let resultat1 = calculer(4, 5, '+');
      expect(resultat1.to.equal(9));
      done();
    });
  
    it('devrait effectuer une soustraction', function(done) {
      let resultat2 = calculer(9, 3, '-');
      expect(resultat2.to.equal(6));
      done();
    });
  
    it('devrait effectuer une multiplication', function(done) {
      let resultat3 = calculer(4, 5, '*');
      expect(resultat3.to.equal(20));
      done();
    });
  
    it('devrait effectuer une division', () => {
      let resultat4 = calculer(10, 5, '/');
      expect(resultat4.to.equal(2));
      done();
    });
});