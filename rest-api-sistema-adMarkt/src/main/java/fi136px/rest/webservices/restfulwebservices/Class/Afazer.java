package fi136px.rest.webservices.restfulwebservices.Class;

import java.time.LocalDate;

public class Afazer {

	public Afazer() {
		
	}
	
	public Afazer(int id, String username, String descricao, LocalDate targetDate, boolean feito) {
		super();
		this.id = id;
		this.username = username;
		this.descricao = descricao;
		this.targetDate = targetDate;
		this.feito = feito;
	}

	private int id;

	private String username;
	
	private String descricao;
	private LocalDate targetDate;
	private boolean feito;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return descricao;
	}

	public void setDescription(String description) {
		this.descricao = description;
	}

	public LocalDate getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(LocalDate targetDate) {
		this.targetDate = targetDate;
	}

	public boolean isFeito() {
		return feito;
	}

	public void setFeito(boolean feito) {
		this.feito = feito;
	}

	@Override
	public String toString() {
		return "Afazer [id=" + id + ", username=" + username + ", description=" + descricao + ", targetDate="
				+ targetDate + ", feito=" + feito + "]";
	}

}