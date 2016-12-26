class Hash
  def method_missing( symbol, *args )
    array = [] + [*args]
    puts "called"
    puts symbol[0..1]
    if symbol[0] == "_"
      key = symbol[1..-1]
      if array.size == 0
        puts "arg 0 is nil, key is " + key
        if self.has_key?(key.to_sym)
          return self[key.to_sym]
        elsif self.has_key?(key)
          return self[key]
        else
          return nil
        end
      else
        key = key[0..-2]
        if self.has_key?(key)
          self[key] = array[0]
        else
          self[key.to_sym] = array[0]
        end
      end
    else
      return nil
    end
  end
end

myhash = {"one"=>1, :two=>2, "four"=>4, :five=>5, "five"=>6}
puts myhash
puts myhash._one
puts myhash._two


#Instead of having to access values in hash by

#h[:one]
#or

#h["one"]
#write a method_missing that allows to use

#h._one
#both for reading and writing. It should

#first check for a key as a symbol, then for a key as a string
#return nil if neither was found
#return the value upon setting a new one
#add a new key as a symbol if it doesn't exist yet
#update whatever key is there, either symbol or string
