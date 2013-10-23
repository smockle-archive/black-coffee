module BlackCoffee
  module Rails
    class Engine < ::Rails::Engine
      initializer 'Black Coffee precompile hook', :group => :all do |app|
        app.config.assets.precompile += ['black-coffee.js']
      end
    end
  end
end