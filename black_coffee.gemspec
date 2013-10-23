$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "black_coffee/rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "black_coffee"
  s.version     = BlackCoffee::Rails::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Clay Miller"]
  s.email       = ["clay@smockle.com"]
  s.homepage    = "http://www.smockle.com"
  s.summary     = "Black Coffee is a pure JavaScript library."
  s.description = "Black Coffee is a collection of DOM extensions and other functions useful for pure JavaScript environments."

  s.add_development_dependency "rails", "~> 4.0"
  
  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]
end
