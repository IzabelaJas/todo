package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Tasks")
public class Tasks {
	
	@Id
	@GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "task_title")
	private String task_title;
	
	@Column(name = "task_here")
	private String task_where;
	
	@Column(name = "task_done")
	private String task_done;
	
	public Tasks() {
		
	}

	public Tasks(long id, String task_title, String task_where, String task_done) {
		super();
		this.id = id;
		this.task_title = task_title;
		this.task_where = task_where;
		this.task_done = task_done;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTask_title() {
		return task_title;
	}

	public void setTask_title(String task_title) {
		this.task_title = task_title;
	}

	public String getTask_where() {
		return task_where;
	}

	public void setTask_where(String task_where) {
		this.task_where = task_where;
	}

	public String getTask_done() {
		return task_done;
	}

	public void setTask_done(String task_done) {
		this.task_done = task_done;
	}
	
	
}
