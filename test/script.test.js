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

    it('devrait effectuer le pourcentage', () => {
        let resultat5 = 50 + gererTouches("%");
        expect(resultat5.to.equal(0.5));
        done();
      });
});

describe('Calculs de la calculatrice scientifique', function() {
    it('devrait effectuer un carré', function(done) {
      let resultat6 = 5 + gererTouches("²");
      expect(resultat6.to.equal(25));
      done();
    });
  
    it('devrait effectuer une racine carré', function(done) {
      let resultat7 = 9 + gererTouches("√");
      expect(resultat7.to.equal(3));
      done();
    });
  
    it('devrait effectuer une puissance', function(done) {
      let resultat8 = 5 + gererTouches("^") + exponent;
      expect(resultat8.to.equal(5)); // car exponent définit à 1 par default
      done();
    });
});