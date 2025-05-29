
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, TreePine, BookOpen, Award, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Community Climate Action Workshop",
      date: "December 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Kiambu County Community Center",
      participants: "50 expected",
      description: "Learn practical strategies for community-led climate action and sustainable development.",
      type: "Workshop",
      icon: TreePine,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Youth Leadership Summit",
      date: "January 20, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "University of Nairobi",
      participants: "200 expected",
      description: "Empowering young leaders with skills for civic engagement and community organizing.",
      type: "Summit",
      icon: Award,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Participatory Budgeting Training",
      date: "February 10, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Nakuru Town Hall",
      participants: "80 expected",
      description: "Training community members on how to participate effectively in county budget processes.",
      type: "Training",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const pastEvents = [
    {
      title: "National Civic Engagement Week",
      date: "October 2024",
      participants: "1,500+ participants",
      description: "Week-long series of events promoting civic participation across 10 counties.",
      impact: "500 new voter registrations"
    },
    {
      title: "Tree Planting Marathon",
      date: "September 2024",
      participants: "800 volunteers",
      description: "Community-wide tree planting event in partnership with Kenya Forest Service.",
      impact: "2,000 trees planted"
    },
    {
      title: "Women in Governance Forum",
      date: "August 2024",
      participants: "300 women leaders",
      description: "Empowering women to take active roles in local and national governance.",
      impact: "50 women trained as advocates"
    }
  ];

  const eventTypes = [
    {
      icon: TreePine,
      title: "Tree Planting Drives",
      description: "Community environmental restoration events",
      frequency: "Monthly"
    },
    {
      icon: BookOpen,
      title: "Training Workshops",
      description: "Capacity building and skill development sessions",
      frequency: "Bi-weekly"
    },
    {
      icon: Users,
      title: "Community Dialogues",
      description: "Public forums on governance and policy issues",
      frequency: "Weekly"
    },
    {
      icon: Award,
      title: "Youth Summits",
      description: "Empowerment events for young leaders",
      frequency: "Quarterly"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us at community dialogues, training workshops, tree planting drives, and youth summits across Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these opportunities to get involved</p>
          </div>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className={`bg-gradient-to-r ${event.color} w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <event.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">{event.title}</h3>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-gray-700">
                          <Calendar className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <MapPin className="h-4 w-4 text-red-600" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span className="text-sm">{event.participants}</span>
                        </div>
                      </div>
                      <Button className="group">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Events We Host</h2>
            <p className="text-xl text-gray-600">Regular programming to support our mission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-3">{type.description}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {type.frequency}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Events</h2>
            <p className="text-xl text-gray-600">Highlights from our recent community engagement activities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
                    <div className="text-yellow-800 font-semibold text-sm">Impact:</div>
                    <div className="text-yellow-700 text-sm">{event.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Calendar</h2>
            <p className="text-xl text-gray-600">Mark your calendar for upcoming community events</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <Calendar className="h-24 w-24 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Event Calendar</h3>
              <p className="text-lg text-gray-600 mb-6">
                View all our upcoming events, workshops, and community activities in one place.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                View Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay informed about all our events and be the first to know about new opportunities to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Subscribe to Events
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
              Follow Us on Social Media
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
