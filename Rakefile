require 'stringex'

POSTS_DIR = "_posts"

task :post do
  date = Time.now.strftime '%Y-%m-%d'

  print "Title: "
  title = STDIN.gets.chomp

  print "Tags: "
  tags = STDIN.gets.chomp

  print "Description: "
  desc = STDIN.gets.chomp
  
  post = File.join POSTS_DIR, "#{date}-#{title.to_url}.md"

  File.open(post, 'w') do |p|
    p.puts <<EOF
---
layout: post
title: #{title}
description: #{desc}
tags: #{tags}
---

EOF
  end

  system "$EDITOR #{post}"
end
