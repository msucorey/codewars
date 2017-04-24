=begin
Write a simple method for the Hash-class that can get the configuration-value
from a JSON-interpreted hash. Its signature is:

Hash.get_value( default, key1, ... )
key1, ... refer to the hash-keys of the JSON-interpreted hash, which is a hash
of hash values. If the path of keys is found, it should return the found value,
else it should return the default value.

Here are some examples on how to use it:

config = { :files => { :mode => 0x777 }, :name => "config" }

config.get_value( 0x0, :files, :mode ) == 0x777
config.get_value( "", :name ) == "config"
config.get_value( 80, :port ) == 80
config.get_value( "cfg", :files, :extension ) == "cfg"
=end

class Hash

def get_value(default, *keys)
  this_hash = self.dup
  keys.each_index do |i|
    if !this_hash.is_a?(Hash)
      return default
    end
    if this_hash.has_key?(keys[i])
      if i == (keys.count - 1)
        return this_hash[keys[i]]
      else
        this_hash = this_hash[keys[i]]
      end
    end
  end
  default
end

end
