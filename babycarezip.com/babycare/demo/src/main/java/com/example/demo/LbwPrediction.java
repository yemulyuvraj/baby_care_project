package com.example.demo;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "lbw_predictions")
public class LbwPrediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double mage; // Mother's age
   private double medu;
   private double monpre;
   private double npvis;
   private double fage;
   private double feduc;
   private double omaps;
   private double fmaps;
   private double cigs;
   private double drink;
   private double male;
   private double mwhte;
   private double mblck;
   private double moth;
   private double fwhte;
   private double fblck;
   private double forth;
   
    public LbwPrediction() {}
   
	public double getMonpre() {
		return monpre;
	}

	public void setMonpre(double monpre) {
		this.monpre = monpre;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public double getMage() {
		return mage;
	}

	public void setMage(double mage) {
		this.mage = mage;
	}

	public double getMedu() {
		return medu;
	}

	public void setMedu(double medu) {
		this.medu = medu;
	}

	public double getNpvis() {
		return npvis;
	}

	public void setNpvis(double npvis) {
		this.npvis = npvis;
	}

	public double getFage() {
		return fage;
	}

	public void setFage(double fage) {
		this.fage = fage;
	}

	public double getFeduc() {
		return feduc;
	}

	public void setFeduc(double feduc) {
		this.feduc = feduc;
	}

	public double getOmaps() {
		return omaps;
	}

	public void setOmaps(double omaps) {
		this.omaps = omaps;
	}

	public double getFmaps() {
		return fmaps;
	}

	public void setFmaps(double fmaps) {
		this.fmaps = fmaps;
	}

	public double getCigs() {
		return cigs;
	}

	public void setCigs(double cigs) {
		this.cigs = cigs;
	}

	public double getDrink() {
		return drink;
	}

	public void setDrink(double drink) {
		this.drink = drink;
	}

	public double getMale() {
		return male;
	}

	public void setMale(double male) {
		this.male = male;
	}

	public double getMwhte() {
		return mwhte;
	}

	public void setMwhte(double mwhte) {
		this.mwhte = mwhte;
	}

	public double getMblck() {
		return mblck;
	}

	public void setMblck(double mblck) {
		this.mblck = mblck;
	}

	public double getMoth() {
		return moth;
	}

	public void setMoth(double moth) {
		this.moth = moth;
	}

	public double getFwhte() {
		return fwhte;
	}

	public void setFwhte(double fwhte) {
		this.fwhte = fwhte;
	}

	public double getFblck() {
		return fblck;
	}

	public void setFblck(double fblck) {
		this.fblck = fblck;
	}

	public double getForth() {
		return forth;
	}

	public void setForth(double forth) {
		this.forth = forth;
	}

	

}	

	