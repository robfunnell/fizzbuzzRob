import {expect} from "chai";
import {fizzbuzz} from "../src/fizzbuzz";
import {fizzbuzzRange} from "../src/fizzbuzz";



describe('fizzbuzz', () => {
  it('should return the number', () => {
    expect(fizzbuzz(1)).to.eql(1);
    expect(fizzbuzz(2)).to.eql(2);
  });

  it('should return fizz instead of 3', () => {
    expect(fizzbuzz(3)).to.eql('fizz');
    expect(fizzbuzz(21)).to.eql('fizz');
  });

  it('should return buzz instead of 5', () => {
    expect(fizzbuzz(5)).to.eql('buzz');
    expect(fizzbuzz(125)).to.eql('buzz');
    expect(fizzbuzz(5005)).to.eql('buzz');
  });

  it('should return fizzbuzz instead of 15', () => {
    expect(fizzbuzz(15)).to.eql('fizzbuzz');
    expect(fizzbuzz(45)).to.eql('fizzbuzz');
  });



});

describe('Fizzbuzz range function', () => {
  it('should return the array', () => {
    expect(fizzbuzzRange(2)).to.eql([1, 2]);
  });
});