package com.jsfassignmentproject.Assignmentsubmission.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity

//create table assignment automatically does that
public class Assignment {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long id;
	private String status;
    private String githubURL;
    private String branch;
    private String codeReviewVideoUrl;
    
    @ManyToOne(optional = false)
    //cannot have assignment without a user
    private User user;
    
    // toDo private User assignedTo;
    
	public Long getId() {
		return id;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getGithubURL() {
		return githubURL;
	}
	public void setGithubURL(String githubURL) {
		this.githubURL = githubURL;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getCodeReviewVideoUrl() {
		return codeReviewVideoUrl;
	}
	public void setCodeReviewVideoUrl(String codeReviewVideoUrl) {
		this.codeReviewVideoUrl = codeReviewVideoUrl;
	}

}
