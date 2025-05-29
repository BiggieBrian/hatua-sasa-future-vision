
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, BookOpen, Video, Image, Newspaper } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Reports & Publications",
      description: "Comprehensive research reports and policy documents",
      items: [
        "Climate Change Impact Assessment 2023",
        "Governance Scorecard for Kenya Counties",
        "Youth Participation in Democracy Report",
        "Community Empowerment Best Practices Guide"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Policy Briefs",
      description: "Concise policy recommendations and analysis",
      items: [
        "Participatory Budgeting Implementation",
        "Climate Adaptation Strategies",
        "Civic Education Curriculum Framework",
        "Local Governance Reform Proposals"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Video,
      title: "Toolkits & Training Materials",
      description: "Practical resources for community organizers",
      items: [
        "Community Organizing Toolkit",
        "Civic Education Training Manual",
        "Climate Action Planning Guide",
        "Social Audit Implementation Toolkit"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Newspaper,
      title: "Blogs & Opinion Pieces",
      description: "Thought leadership and community voices",
      items: [
        "The Future of Youth in Governance",
        "Climate Justice and Community Rights",
        "Building Inclusive Democracy",
        "Lessons from Grassroots Organizing"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const mediaItems = [
    {
      title: "HatuaSasa Network Featured in The Nation",
      type: "News Article",
      date: "March 2024",
      description: "Our climate advocacy work highlighted in national media"
    },
    {
      title: "KTN Interview: Youth and Governance",
      type: "TV Interview",
      date: "February 2024",
      description: "Executive Director discusses youth participation"
    },
    {
      title: "BBC Focus on Africa: Climate Activism",
      type: "Radio Feature",
      date: "January 2024",
      description: "International coverage of our tree planting campaigns"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Resources & Media</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Access our research, toolkits, training materials, and media coverage to support your own advocacy work
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Resources</h2>
            <p className="text-xl text-gray-600">Tools and knowledge to empower your advocacy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="space-y-3 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700">{item}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View All {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600">Our most popular and impactful publications</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Climate Action Handbook 2024</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide for communities to develop and implement climate action plans.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Civic Education Toolkit</h3>
                <p className="text-gray-600 mb-4">
                  Essential materials for conducting effective civic education workshops in communities.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-full h-48 rounded-lg mb-6 flex items-center justify-center">
                  <Video className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Training Video Series</h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step video guides for community organizers and advocates.
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Video className="h-4 w-4 mr-2" />
                    Watch
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Coverage</h2>
            <p className="text-xl text-gray-600">How our work is being recognized and reported</p>
          </div>
          <div className="space-y-6">
            {mediaItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
                          <Newspaper className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{item.type}</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 ml-13">{item.description}</p>
                    </div>
                    <Button variant="outline" className="shrink-0">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Media Coverage
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest resources, reports, and updates from HatuaSasa Network.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
