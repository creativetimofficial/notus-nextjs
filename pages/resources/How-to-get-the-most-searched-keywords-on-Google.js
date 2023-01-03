import React from "react";
import Head from "next/head";
import IndexNavbar from "../../components/Navbars/IndexNavbar";

const ToolsPage = () => {
	return (
		<>
			<Head>
				<title>
					Keyword Research - How to get the most searched keywords on Google in { new Date().getFullYear() }
				</title>
				<meta 
					name="description" 
					content="This Google Sheets Template is a Keyword Research tool that 
					automates the process of how to get the most searched keywords on
					Google in 2023"
				/>
			</Head>
			<IndexNavbar/>
			<div className="blog-posts">
				<h1 className="bp-title">
					Keyword Research: How to get the most searched keywords on Google in { new Date().getFullYear() }
				</h1>
				<section>
					<p>
						If you run a business or work in digital marketing, you are aware 
						of the importance of SEO in increasing traffic to and exposure of 
						your website. 
					</p>
					<p>
						In order to optimise your website and raise its 
						position in search results, keyword research is an essential 
						component of SEO. 
					</p>
					
					<p> 
						This involves choosing and focusing on the 
						appropriate keywords.   
					</p>
					<p> 
						Although there are numerous tools on the market 
						for performing keyword research, a lot of the tools 
						are not affordable as you pay a monthly fee to use them, while the free tools 
						are limited in the results they provide.  
					</p>
					<p>
						In this article, we will introduce a Google Sheets Template that automates the process
						of getting the most searched keywords on Google. 
					</p>
				</section>
				<section>
					<div
				      className="video"
				      style={{
				        position: "relative",
				        paddingBottom: "56.25%" /* 16:9 */,
				        paddingTop: 25,
				        height: 0,
				        margin: "1em"
				      }}
				    >
				      <iframe
				        style={{
				          position: "absolute",
				          top: 0,
				          left: 0,
				          width: "100%",
				          height: "100%"
				        }}
				        src={`https://www.youtube.com/embed/z0O9WWcBrPo?controls=0`}
				        frameBorder="0"
				      />
				    </div>
				</section>
				<section className="art-1">
					<h1>questions?..Questions??...QUESTIONS???</h1>
					<p>
						Everybody has questions. And the majority of the time, they 
						start their search for the answers on Google and other online 
						communities.
					</p>
					<p>
						Since 2017, <a href="https://moz.com/blog/state-of-searcher-behavior-revealed" target="_blank" rel="noreferrer noopener">approximately 8% of Google searches are phrased as questions</a>.
					</p>
					<p>
						If you think that this number is too low, keep in mind that it represents about 8% of the <a href="https://www.oberlo.com/blog/google-search-statistics" target="_blank" rel="noreferrer noopener">8.5 billion daily searches</a>, or <strong>680 million questions.
						Every Single Day.</strong>
					</p>
					<p>
						One thread that is common to all questions is that they are usually long-tail phrases:	
					</p>
					<p>
						Whether it’s a quick question about how to lose weight safely 
						or an in-depth research question on the best Meeting Automation systems to implement, 
						people are asking these questions in Google.	
					</p>
					<p>
						But how do you know what questions people are asking, 
						so that you can provide the best possible answers, and at the same time, 
						introduce people to your product or service?
					</p>
					<p>
						That is what this article is about; I am going to introduce a template that automatically
						captures these questions for you in a Google Sheet, so that you can scale your question-based keyword research 
						and create content for the people searching for these terms.
					</p>
				</section>
				<section className="art-2">
					<h1>Before then, see reasons why question-based keywords are a gold-mine of quality traffic!!</h1>
					<h2>1. Low competition</h2>
					<p>
						Typically, question-based keywords have much less competition 
						and thus don't require you to produce long-form content or establish 
						any backlinks to rank on the first page of search results.
					</p>
					<h2>2. High Intent</h2>
					<p>
						One of the major advantages of focusing on question-based keywords is that 
						they tend to indicate a high degree of intent.
					</p>
					<p>
						When somebody types a question into Google, it's usually because 
						they have a particular problem and want a precise answer; and quickly too.
					</p>
					<p>
						This provides a great opportunity for you to answer their specific question 
						and then have the chance to put forward your product or service as the solution to their problem.
					</p>
				</section>
				<section className="art-3">
					<h1>Question-based Keyword Research Google Sheets Template</h1>
					<img src="/img/Google Autosuggest Questions Screenshot.png"/>
					<p>
						It sure takes a lot of time and effort to conduct research for 
						the millions of actual, unfiltered questions people are typing into Google, same as the one above.
					</p>
					<p>
						Wouldn't it be great if you could automate this process?
					</p>
					<img src="/img/keywordResearchGIF.gif"/>
					<p>
						<a>This question-based keyword Google Sheets template</a> accepts <strong>2-word</strong> head terms and then scans
						Google for all the actual questions that people are searching related to the terms.
					</p>
					<img src="/img/question-words.png"/>
					<p>
						Since people ask questions using certain qualifiers, it uses a combination of these qualifiers and copies all of the possible
						available questions into a new sheet, named after the head term.  
					</p>
					<p>
						Once you have all the possible questions people are asking related to the 
						head terms, you can go ahead to create content that provides the best possible 
						answer to the questions and you will be sure to get highly targeted traffic for  
						those terms. 
					</p>
						<p>
						To get access to this template and scale your question-based keyword research, <a href="/question-based-keyword-tool-checkout">click here</a>.
					</p>
				</section>
				<section className="art-4">
					<h2>Conclusion</h2>
					<p>
						In summary, this Google Sheets Keyword Research template is a
						valuable asset if you are trying to find keywords that can rank high 
						in the search results and attract targeted traffic.  
					</p>
				</section>
			</div>
		</>
	)
}

export default ToolsPage;


