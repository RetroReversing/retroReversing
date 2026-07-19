# frozen_string_literal: true

require 'mkmf'

append_cflags(["-std=c99"])

create_makefile('commonmarker/commonmarker')
