import { Editor } from "@tinymce/tinymce-react"
import React from "react"
import { Controller } from "react-hook-form"
import conf from "../conf"

const RTE = ({
    name,
    control,
    initialValue = ""
}) => {
    return (
        <div className="w-full">
            
        <Controller
            name={name || "content"}
            control={control}
            render={({ field: { onChange } }) => (
                <Editor
                apiKey={conf.tinyApiKey}
                initialValue={initialValue}
                init={{
                    branding: false,
                    height: 500,
                    selector: 'textarea',
                    menubar: true,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "anchor",
                        "wordcount"
                        ],
                        toolbar:
                        "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        statusbar: false,
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        
                    }
                }
                onEditorChange={onChange}
                />
            )}
            />
            </div>
    )
}

export default RTE