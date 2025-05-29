
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Heart, Shield, CheckCircle, Phone, CreditCard } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Donate = () => {
  const [copiedPaybill, setCopiedPaybill] = useState(false);
  const [copiedBuyGoods, setCopiedBuyGoods] = useState(false);

  const copyToClipboard = (text: string, type: 'paybill' | 'buygoods') => {
    navigator.clipboard.writeText(text);
    if (type === 'paybill') {
      setCopiedPaybill(true);
      setTimeout(() => setCopiedPaybill(false), 2000);
    } else {
      setCopiedBuyGoods(true);
      setTimeout(() => setCopiedBuyGoods(false), 2000);
    }
    toast.success(`${type === 'paybill' ? 'Paybill' : 'Buy Goods'} number copied!`);
  };

  const donationTiers = [
    {
      amount: "KSH 500",
      description: "Supports civic education materials for 5 community members",
      impact: "Educational Impact"
    },
    {
      amount: "KSH 1,500",
      description: "Funds tree seedlings for community planting drives",
      impact: "Environmental Impact"
    },
    {
      amount: "KSH 3,000",
      description: "Sponsors a community governance forum",
      impact: "Governance Impact"
    },
    {
      amount: "KSH 5,000",
      description: "Supports youth leadership training workshop",
      impact: "Empowerment Impact"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your contribution helps us build a more just, equitable, and sustainable society. 
              Every donation makes a direct impact on communities across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Mpesa Payment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Donate via M-Pesa</h2>
            <p className="text-xl text-gray-600">Choose your preferred M-Pesa payment method</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paybill Card */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">M-Pesa Paybill</h3>
                  <p className="text-gray-600">Pay directly through M-Pesa Paybill</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">Paybill Number</p>
                        <p className="text-2xl font-bold text-gray-900">522522</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard('522522', 'paybill')}
                        className="flex items-center space-x-2"
                      >
                        {copiedPaybill ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        <span>{copiedPaybill ? 'Copied!' : 'Copy'}</span>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Account Number</p>
                    <p className="text-lg font-semibold text-gray-900">HATUASASA</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Steps:</strong></p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Go to M-Pesa menu</li>
                    <li>Select Lipa na M-Pesa</li>
                    <li>Select Pay Bill</li>
                    <li>Enter Business No: 522522</li>
                    <li>Enter Account No: HATUASASA</li>
                    <li>Enter Amount</li>
                    <li>Enter M-Pesa PIN</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Buy Goods Card */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Buy Goods & Services</h3>
                  <p className="text-gray-600">Pay through Buy Goods till number</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">Till Number</p>
                        <p className="text-2xl font-bold text-gray-900">5678910</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard('5678910', 'buygoods')}
                        className="flex items-center space-x-2"
                      >
                        {copiedBuyGoods ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        <span>{copiedBuyGoods ? 'Copied!' : 'Copy'}</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Steps:</strong></p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Go to M-Pesa menu</li>
                    <li>Select Lipa na M-Pesa</li>
                    <li>Select Buy Goods & Services</li>
                    <li>Enter Till No: 5678910</li>
                    <li>Enter Amount</li>
                    <li>Enter M-Pesa PIN</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Suggested Donations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-xl text-gray-600">See how your donation makes a difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-green-600 mb-2">{tier.amount}</p>
                    <p className="text-sm font-medium text-blue-600 mb-3">{tier.impact}</p>
                  </div>
                  <p className="text-gray-600 text-sm text-center">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safe & Secure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donations are processed securely through M-Pesa's trusted payment platform. 
              We are committed to transparency and will provide updates on how your contribution is making an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">All transactions are encrypted and secure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">Regular impact reports and updates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Direct Impact</h3>
              <p className="text-gray-600">100% goes to our programs and communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Large Donations */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Planning a Larger Donation?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            For donations above KSH 50,000 or if you'd like to discuss specific program funding, 
            please get in touch with our team directly.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <a href="mailto:info@hatuasasa.org">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Donate;
