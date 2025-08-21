import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar, ArrowLeft, Share2, BookOpen, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "how-to-verify-property-documents": {
    id: 1,
    title: "How to Verify Property Documents",
    excerpt: "A comprehensive guide to checking all essential documents before purchasing a property.",
    content: `
      <p>Purchasing a property is one of the most significant investments you'll make in your lifetime. Ensuring that all documents are verified and legitimate is crucial to avoid legal complications and financial losses. This comprehensive guide will walk you through every essential document you need to check.</p>

      <h2>Essential Documents to Verify</h2>

      <h3>1. Title Deed</h3>
      <p>The title deed is the most important document that establishes ownership of the property. It should clearly mention:</p>
      <ul>
        <li>Current owner's name and details</li>
        <li>Property description and boundaries</li>
        <li>Chain of ownership history</li>
        <li>Any encumbrances or liens</li>
      </ul>

      <h3>2. Sale Deed</h3>
      <p>This document records the transfer of ownership from the previous owner to the current owner. Verify that:</p>
      <ul>
        <li>All parties have signed the document</li>
        <li>The document is registered with the sub-registrar</li>
        <li>Stamp duty has been paid appropriately</li>
      </ul>

      <h3>3. Approved Building Plan</h3>
      <p>Ensure the construction matches the approved plan by checking:</p>
      <ul>
        <li>Municipal corporation approval</li>
        <li>Building plan sanctions</li>
        <li>Completion certificate</li>
        <li>Occupancy certificate</li>
      </ul>

      <h3>4. NOC from Various Authorities</h3>
      <p>Depending on the location, you may need NOCs from:</p>
      <ul>
        <li>Fire department</li>
        <li>Pollution control board</li>
        <li>Airport authority (if near airport)</li>
        <li>Forest department (if near forest area)</li>
      </ul>

      <h2>Red Flags to Watch Out For</h2>
      <p>Be cautious if you encounter any of these warning signs:</p>
      <ul>
        <li>Seller reluctant to show original documents</li>
        <li>Discrepancies in property measurements</li>
        <li>Pending legal cases on the property</li>
        <li>Multiple sale deeds for the same property</li>
        <li>Unpaid property taxes or utility bills</li>
      </ul>

      <h2>Professional Verification</h2>
      <p>While you can do initial checks yourself, it's highly recommended to engage professionals:</p>
      <ul>
        <li><strong>Property Lawyer:</strong> For legal document verification</li>
        <li><strong>Chartered Accountant:</strong> For tax-related documents</li>
        <li><strong>Real Estate Agent:</strong> For market verification and due diligence</li>
      </ul>

      <h2>Digital Verification Tools</h2>
      <p>Many states now offer online verification systems:</p>
      <ul>
        <li>Property card verification portals</li>
        <li>Sub-registrar office websites</li>
        <li>Municipal corporation online services</li>
        <li>RERA website for project verification</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Document verification is not just a formality—it's your protection against fraud and legal issues. Take the time to thoroughly verify all documents, and don't hesitate to seek professional help when needed. Remember, it's better to be cautious now than to face problems later.</p>
    `,
    image: "/modern-apartment-building.png",
    author: "Rajesh Dhawan",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Legal Guide",
  },
  "neighborhood-checklist-before-you-buy": {
    id: 2,
    title: "Neighborhood Checklist Before You Buy",
    excerpt: "Essential factors to evaluate when choosing a neighborhood for your new home.",
    content: `
      <p>Choosing the right neighborhood is just as important as choosing the right property. The area you live in affects your daily life, property value appreciation, and overall quality of life. Here's a comprehensive checklist to help you evaluate any neighborhood before making your purchase decision.</p>

      <h2>Connectivity and Transportation</h2>

      <h3>Public Transportation</h3>
      <ul>
        <li>Distance to nearest metro station or bus stop</li>
        <li>Frequency and reliability of public transport</li>
        <li>Connectivity to major business districts</li>
        <li>Future transportation projects planned</li>
      </ul>

      <h3>Road Infrastructure</h3>
      <ul>
        <li>Quality of roads and maintenance</li>
        <li>Traffic congestion during peak hours</li>
        <li>Parking availability</li>
        <li>Planned road widening or flyover projects</li>
      </ul>

      <h2>Essential Amenities</h2>

      <h3>Healthcare Facilities</h3>
      <ul>
        <li>Hospitals and clinics within 5km radius</li>
        <li>Specialty medical services availability</li>
        <li>Pharmacy and medical stores</li>
        <li>Emergency services accessibility</li>
      </ul>

      <h3>Educational Institutions</h3>
      <ul>
        <li>Quality schools within walking distance</li>
        <li>Colleges and universities nearby</li>
        <li>Coaching centers and libraries</li>
        <li>Playgrounds and sports facilities</li>
      </ul>

      <h3>Shopping and Entertainment</h3>
      <ul>
        <li>Grocery stores and supermarkets</li>
        <li>Shopping malls and markets</li>
        <li>Restaurants and cafes</li>
        <li>Movie theaters and entertainment venues</li>
      </ul>

      <h2>Safety and Security</h2>
      <p>Safety should be a top priority when choosing a neighborhood:</p>
      <ul>
        <li>Crime rates in the area</li>
        <li>Police station proximity</li>
        <li>Street lighting quality</li>
        <li>Security guards in residential complexes</li>
        <li>CCTV surveillance in common areas</li>
      </ul>

      <h2>Future Development Plans</h2>
      <p>Research upcoming developments that could impact the area:</p>
      <ul>
        <li>New residential or commercial projects</li>
        <li>Infrastructure improvements</li>
        <li>Metro line extensions</li>
        <li>Industrial developments</li>
        <li>Environmental projects</li>
      </ul>

      <h2>Community and Lifestyle</h2>
      <ul>
        <li>Demographics and community culture</li>
        <li>Parks and recreational facilities</li>
        <li>Religious places</li>
        <li>Community centers and clubs</li>
        <li>Noise levels and pollution</li>
      </ul>

      <h2>Property Value Trends</h2>
      <p>Analyze the investment potential:</p>
      <ul>
        <li>Historical property price trends</li>
        <li>Rental demand and yields</li>
        <li>Resale value potential</li>
        <li>Comparison with nearby areas</li>
      </ul>

      <h2>Practical Tips for Evaluation</h2>
      <ul>
        <li>Visit the area at different times of day</li>
        <li>Talk to current residents</li>
        <li>Check online reviews and forums</li>
        <li>Walk around the neighborhood</li>
        <li>Test the commute to your workplace</li>
      </ul>

      <h2>Conclusion</h2>
      <p>A thorough neighborhood evaluation can save you from future regrets and ensure a better quality of life. Take your time to research and visit multiple times before making your final decision. Remember, you're not just buying a property—you're choosing a lifestyle.</p>
    `,
    image: "/comfortable-family-house.png",
    author: "Priya Sharma",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Buying Guide",
  },
  "home-loan-basics-for-first-time-buyers": {
    id: 3,
    title: "Home Loan Basics for First-Time Buyers",
    excerpt: "Everything you need to know about home loans - from eligibility to approval.",
    content: `
      <p>Buying your first home is an exciting milestone, but navigating the home loan process can seem overwhelming. This comprehensive guide will help you understand everything about home loans, from eligibility criteria to getting the best deal.</p>

      <h2>Understanding Home Loans</h2>
      <p>A home loan is a secured loan where the property serves as collateral. Banks and financial institutions offer home loans at competitive interest rates with repayment periods extending up to 30 years.</p>

      <h2>Types of Home Loans</h2>

      <h3>1. Home Purchase Loan</h3>
      <p>For buying a new or resale property</p>

      <h3>2. Home Construction Loan</h3>
      <p>For constructing a house on your own land</p>

      <h3>3. Home Improvement Loan</h3>
      <p>For renovating or improving your existing home</p>

      <h3>4. Plot Loan</h3>
      <p>For purchasing land for future construction</p>

      <h2>Eligibility Criteria</h2>

      <h3>Age Requirements</h3>
      <ul>
        <li>Minimum age: 21 years</li>
        <li>Maximum age at loan maturity: 65 years (salaried), 70 years (self-employed)</li>
      </ul>

      <h3>Income Requirements</h3>
      <ul>
        <li>Stable income for at least 2-3 years</li>
        <li>Minimum monthly income varies by lender (typically ₹25,000+)</li>
        <li>Debt-to-income ratio should be manageable</li>
      </ul>

      <h3>Credit Score</h3>
      <ul>
        <li>Minimum CIBIL score: 750+ (preferred)</li>
        <li>Clean credit history with no defaults</li>
        <li>Low credit utilization ratio</li>
      </ul>

      <h2>Required Documents</h2>

      <h3>Identity and Address Proof</h3>
      <ul>
        <li>Aadhaar card</li>
        <li>PAN card</li>
        <li>Passport</li>
        <li>Voter ID</li>
      </ul>

      <h3>Income Proof</h3>
      <ul>
        <li>Salary slips (last 3 months)</li>
        <li>Bank statements (last 6 months)</li>
        <li>Form 16 or ITR (last 2 years)</li>
        <li>Employment certificate</li>
      </ul>

      <h3>Property Documents</h3>
      <ul>
        <li>Sale agreement</li>
        <li>Property title documents</li>
        <li>Approved building plan</li>
        <li>NOC from builder</li>
      </ul>

      <h2>Interest Rates</h2>

      <h3>Fixed Interest Rate</h3>
      <p>Rate remains constant throughout the loan tenure. Provides certainty but typically higher than floating rates.</p>

      <h3>Floating Interest Rate</h3>
      <p>Rate fluctuates based on market conditions. Generally lower initially but can increase over time.</p>

      <h3>Hybrid Interest Rate</h3>
      <p>Combination of fixed and floating rates for different periods.</p>

      <h2>Loan Amount Calculation</h2>
      <p>Banks typically offer 80-90% of the property value as loan. The amount depends on:</p>
      <ul>
        <li>Your income and repayment capacity</li>
        <li>Property value and location</li>
        <li>Credit score and history</li>
        <li>Age and employment stability</li>
      </ul>

      <h2>EMI Calculation</h2>
      <p>EMI = [P x R x (1+R)^N] / [(1+R)^N-1]</p>
      <p>Where:</p>
      <ul>
        <li>P = Principal loan amount</li>
        <li>R = Monthly interest rate</li>
        <li>N = Number of monthly installments</li>
      </ul>

      <h2>Tips to Get the Best Deal</h2>
      <ul>
        <li>Compare offers from multiple lenders</li>
        <li>Negotiate on interest rates and processing fees</li>
        <li>Consider the total cost, not just EMI</li>
        <li>Check for prepayment and foreclosure charges</li>
        <li>Look for special schemes for first-time buyers</li>
      </ul>

      <h2>Tax Benefits</h2>

      <h3>Section 80C</h3>
      <p>Deduction up to ₹1.5 lakh on principal repayment</p>

      <h3>Section 24(b)</h3>
      <p>Deduction up to ₹2 lakh on interest payment</p>

      <h3>Section 80EE</h3>
      <p>Additional ₹50,000 deduction for first-time buyers (conditions apply)</p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Not checking credit score before applying</li>
        <li>Applying to multiple lenders simultaneously</li>
        <li>Ignoring processing fees and other charges</li>
        <li>Not reading the fine print</li>
        <li>Overestimating repayment capacity</li>
      </ul>

      <h2>Conclusion</h2>
      <p>A home loan is a long-term commitment that requires careful planning and research. Take time to understand all aspects, compare options, and choose the loan that best fits your financial situation. Remember, the cheapest option isn't always the best—consider the overall terms and conditions.</p>
    `,
    image: "/luxury-modern-residence.png",
    author: "Amit Kumar",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    category: "Finance",
  },
  "new-launch-vs-resale-pros-and-cons": {
    id: 4,
    title: "New Launch vs. Resale: Pros & Cons",
    excerpt: "Detailed comparison between new launch and resale properties to help you make the right choice.",
    content: `
      <p>One of the biggest decisions when buying a property is choosing between a new launch project and a resale property. Both options have their advantages and disadvantages. This comprehensive comparison will help you make an informed decision based on your needs and circumstances.</p>

      <h2>New Launch Properties</h2>

      <h3>Advantages</h3>

      <h4>Modern Amenities and Design</h4>
      <ul>
        <li>Latest architectural designs and layouts</li>
        <li>Modern amenities like gym, swimming pool, clubhouse</li>
        <li>Smart home features and technology integration</li>
        <li>Energy-efficient systems and green building features</li>
      </ul>

      <h4>Customization Options</h4>
      <ul>
        <li>Choice of floor plans and unit configurations</li>
        <li>Interior design and fixture selections</li>
        <li>Preferred floor and facing options</li>
        <li>Parking space selection</li>
      </ul>

      <h4>Payment Flexibility</h4>
      <ul>
        <li>Staggered payment plans during construction</li>
        <li>Lower initial investment requirement</li>
        <li>Time to arrange finances</li>
        <li>Potential for price appreciation during construction</li>
      </ul>

      <h4>Investment Potential</h4>
      <ul>
        <li>Higher appreciation potential in growing areas</li>
        <li>Better rental yields in prime locations</li>
        <li>Tax benefits during construction period</li>
        <li>Opportunity to buy at pre-launch prices</li>
      </ul>

      <h3>Disadvantages</h3>

      <h4>Possession Delays</h4>
      <ul>
        <li>Construction delays are common</li>
        <li>Uncertainty about actual possession date</li>
        <li>Continued rent payments during delays</li>
        <li>Potential legal complications</li>
      </ul>

      <h4>Higher Costs</h4>
      <ul>
        <li>Premium pricing for new projects</li>
        <li>Additional charges for amenities</li>
        <li>GST and other taxes</li>
        <li>Registration and other fees</li>
      </ul>

      <h4>Unknown Factors</h4>
      <ul>
        <li>Builder's track record uncertainty</li>
        <li>Quality of construction unknown until completion</li>
        <li>Neighborhood development unpredictable</li>
        <li>Actual vs. promised amenities</li>
      </ul>

      <h2>Resale Properties</h2>

      <h3>Advantages</h3>

      <h4>Immediate Possession</h4>
      <ul>
        <li>Ready to move in immediately</li>
        <li>No construction delays</li>
        <li>Immediate rental income potential</li>
        <li>No temporary accommodation costs</li>
      </ul>

      <h4>Established Neighborhood</h4>
      <ul>
        <li>Developed infrastructure and amenities</li>
        <li>Established community and social connections</li>
        <li>Known connectivity and transportation</li>
        <li>Proven appreciation trends</li>
      </ul>

      <h4>Transparent Pricing</h4>
      <ul>
        <li>Market-driven pricing</li>
        <li>Room for negotiation</li>
        <li>No hidden costs or surprises</li>
        <li>Clear understanding of total investment</li>
      </ul>

      <h4>Verified Quality</h4>
      <ul>
        <li>Actual condition visible before purchase</li>
        <li>Known maintenance issues</li>
        <li>Established builder reputation</li>
        <li>Existing resident feedback available</li>
      </ul>

      <h3>Disadvantages</h3>

      <h4>Limited Customization</h4>
      <ul>
        <li>Fixed layout and design</li>
        <li>Potential renovation costs</li>
        <li>Outdated amenities or features</li>
        <li>Limited choice in unit selection</li>
      </ul>

      <h4>Maintenance Issues</h4>
      <ul>
        <li>Wear and tear from previous use</li>
        <li>Potential hidden defects</li>
        <li>Immediate maintenance requirements</li>
        <li>Older building systems</li>
      </ul>

      <h4>Higher Immediate Investment</h4>
      <ul>
        <li>Full payment required upfront</li>
        <li>Immediate registration and transfer costs</li>
        <li>Potential renovation expenses</li>
        <li>Moving and setup costs</li>
      </ul>

      <h2>Decision Factors</h2>

      <h3>Choose New Launch If:</h3>
      <ul>
        <li>You can wait 2-4 years for possession</li>
        <li>You prefer modern amenities and designs</li>
        <li>You want customization options</li>
        <li>You're looking for long-term investment</li>
        <li>You have flexible payment capacity</li>
      </ul>

      <h3>Choose Resale If:</h3>
      <ul>
        <li>You need immediate possession</li>
        <li>You prefer established neighborhoods</li>
        <li>You want to see actual property condition</li>
        <li>You have limited time for research</li>
        <li>You prefer transparent, negotiable pricing</li>
      </ul>

      <h2>Financial Comparison</h2>

      <h3>New Launch</h3>
      <ul>
        <li>Lower initial payment</li>
        <li>Staggered payments during construction</li>
        <li>Potential price appreciation</li>
        <li>GST applicable (12% for affordable housing, 5% for others)</li>
      </ul>

      <h3>Resale</h3>
      <ul>
        <li>Full payment required</li>
        <li>Immediate possession benefits</li>
        <li>No GST (only stamp duty and registration)</li>
        <li>Potential for negotiation</li>
      </ul>

      <h2>Risk Assessment</h2>

      <h3>New Launch Risks</h3>
      <ul>
        <li>Construction delays</li>
        <li>Builder default</li>
        <li>Quality issues</li>
        <li>Regulatory changes</li>
      </ul>

      <h3>Resale Risks</h3>
      <ul>
        <li>Hidden defects</li>
        <li>Legal title issues</li>
        <li>Overpricing</li>
        <li>Limited appreciation potential</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The choice between new launch and resale properties depends on your specific needs, financial situation, and risk tolerance. New launches offer modern features and customization but come with uncertainty and delays. Resale properties provide immediate possession and transparency but may require additional investment for upgrades. Carefully evaluate your priorities and consult with real estate experts before making your decision.</p>
    `,
    image: "/luxury-villa-garden-pool.png",
    author: "Neha Gupta",
    publishDate: "2024-01-01",
    readTime: "7 min read",
    category: "Investment",
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return <div>Post not found</div>
  }

  const relatedPosts = Object.values(blogPosts)
    .filter((p) => p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-navy-900">
                Dhawan Properties
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-navy-900 transition-colors">
                Home
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-navy-900 transition-colors">
                Properties
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-navy-900 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-navy-900 font-semibold">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-navy-900 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-navy-900 hover:bg-navy-800 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-navy-900">
              Blog
            </Link>
            <span>/</span>
            <span className="text-navy-900 font-medium">{post.title}</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-navy-900 hover:text-gold-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <Badge className="mb-4 bg-navy-900 text-white">{post.category}</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4 leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>Real Estate Guide</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
            <div className="flex items-center space-x-4">
              <img
                src="/professional-real-estate-agent.png"
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-navy-900">{post.author}</div>
                <div className="text-sm text-gray-600">Real Estate Expert</div>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-700 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-navy-900 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-navy-900 [&>h3]:mt-6 [&>h3]:mb-3 [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-navy-900 [&>h4]:mt-4 [&>h4]:mb-2 [&>p]:mb-4 [&>ul]:mb-4 [&>ul]:pl-6 [&>li]:mb-2 [&>li]:list-disc"
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-6 bg-navy-900 text-white rounded-lg">
          <h3 className="text-xl font-bold mb-4">Need Expert Real Estate Advice?</h3>
          <p className="mb-4">
            Our experienced team is here to help you navigate your property journey. Get personalized guidance and
            expert insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">Get Free Consultation</Button>
            </Link>
            <Link href="/properties">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
              >
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-navy-900 text-white text-xs">{relatedPost.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{relatedPost.readTime}</span>
                    <Link
                      href={`/blog/${Object.keys(blogPosts).find((key) => blogPosts[key as keyof typeof blogPosts].id === relatedPost.id)}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dhawan Properties</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in real estate with verified listings and transparent dealings.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Instagram
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/properties" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Property Buying</li>
                <li>Property Selling</li>
                <li>Investment Consulting</li>
                <li>Legal Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@dhawanproperties.in</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span>Sector 14, Gurgaon, Haryana 122001</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dhawan Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
